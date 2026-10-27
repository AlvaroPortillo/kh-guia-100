import re,html,sys
def tx(path):
    b=open(path,'rb').read()
    try: t=b.decode('utf-8')
    except: t=b.decode('latin-1')
    t=re.sub(r'(?is)<(script|style)[^>]*>.*?</\1>','',t)
    t=re.sub(r'(?i)<br\s*/?>','\n',t); t=re.sub(r'(?i)</(p|div|li|tr|h\d|table|ul|ol)>','\n',t); t=re.sub(r'(?i)<(td|th)[^>]*>',' | ',t)
    t=re.sub(r'(?i)<li[^>]*>','- ',t); t=re.sub(r'<[^>]+>','',t); t=html.unescape(t)
    t=re.sub(r'[ \t]+',' ',t); t=re.sub(r'\n\s*\n+','\n',t); return t.strip()
for f in sys.argv[1:]:
    open(f[:-5]+'.txt','w',encoding='utf-8').write(tx(f))
