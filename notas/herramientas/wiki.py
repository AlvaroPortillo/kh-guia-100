import sys,json,urllib.request,urllib.parse,re
sys.stdout.reconfigure(encoding='utf-8')
base=sys.argv[1]; out=sys.argv[2]
for t in sys.argv[3:]:
    u=base+'?action=parse&redirects=1&prop=wikitext&format=json&page='+urllib.parse.quote(t)
    try:
        d=json.load(urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'kh-guia-personal/1.0'})))
        w=d['parse']['wikitext']['*']; ti=d['parse']['title']
    except Exception as e:
        print('ERR',t,e); continue
    fn=re.sub(r'[^\w]+','_',t)+'.txt'
    open(out+'/'+fn,'w',encoding='utf-8').write(w)
    print('OK',t,'->',ti,len(w))
