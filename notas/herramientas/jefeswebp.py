"""Convierte renders (jefe-*.webp, 320x400) y capturas Versus (vs-*, 800x450) a WebP."""
import sys, os
from PIL import Image
d, o = sys.argv[1], sys.argv[2]
os.makedirs(o, exist_ok=True)
for f in sorted(os.listdir(d)):
    im = Image.open(os.path.join(d, f))
    if f.startswith('vs-'):
        im = im.convert('RGB'); im.thumbnail((800, 450), Image.LANCZOS)
        im.save(os.path.join(o, 'jefe-' + f[:-4] + '.webp'), quality=80, method=6)
    else:
        im = im.convert('RGBA'); im.thumbnail((320, 400), Image.LANCZOS)
        im.save(os.path.join(o, 'jefe-' + f[:-4] + '.webp'), quality=86, method=6)
    print(f, im.size)
