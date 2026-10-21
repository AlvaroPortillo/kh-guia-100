import sys,re,html,json
sys.stdout.reconfigure(encoding='utf-8')
s=open(sys.argv[1],encoding='utf-8').read()
out={}
for m in re.finditer(r'<div class="subSectionTitle">\s*(.*?)\s*</div>.*?<div class="subSectionDesc">(.*?)<div style="clear: both">',s,re.S):
    title=html.unescape(re.sub('<[^>]+>','',m.group(1))).strip()
    body=m.group(2)
    if 'bb_table' not in body: continue
    rows=[]
    for tr in re.findall(r'<div class="bb_table_tr">(.*?)</div>\s*(?=<div class="bb_table_tr">|</div>\s*$|</div>\s*<)',body,re.S):
        pass
    # simpler: split on tr
    for tr in body.split('<div class="bb_table_tr">')[1:]:
        cells=re.findall(r'<div class="bb_table_t[dh]">(.*?)</div>',tr,re.S)
        cells=[[html.unescape(re.sub('<[^>]+>','',x)).strip() for x in re.split(r'<br\s*/?>',c)] for c in cells]
        rows.append(cells)
    out.setdefault(title,[]).extend(rows)
json.dump(out,open(sys.argv[2],'w',encoding='utf-8'),ensure_ascii=False,indent=0)
for k,v in out.items(): print(k,len(v))
