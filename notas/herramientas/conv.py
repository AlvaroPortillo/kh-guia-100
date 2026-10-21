import sys, os
from PIL import Image, ImageSequence
src, out = sys.argv[1], sys.argv[2]
W, H = 320, 180
def fit(im):
    im = im.convert('RGB')
    w, h = im.size
    r = max(W / w, H / h)
    im = im.resize((round(w * r), round(h * r)), Image.LANCZOS)
    l = (im.width - W) // 2; t = (im.height - H) // 2
    return im.crop((l, t, l + W, t + H))
for f in sorted(os.listdir(src)):
    p = os.path.join(src, f); base, ext = os.path.splitext(f)
    im = Image.open(p)
    if ext == '.gif':
        frames, durs = [], []
        for fr in ImageSequence.Iterator(im):
            frames.append(fit(fr)); durs.append(fr.info.get('duration', 60) or 60)
        frames[0].save(os.path.join(out, base + '.webp'), save_all=True, append_images=frames[1:], duration=durs, loop=0, quality=62, method=6)
        frames[len(frames) // 2].save(os.path.join(out, base + '-fijo.webp'), quality=80, method=6)
        print(f, len(frames), 'frames')
    else:
        im.save(os.path.join(out, base + '.webp'), quality=88, method=6, lossless=im.mode == 'RGBA')
        print(f)
