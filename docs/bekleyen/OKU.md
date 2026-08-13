# Bekleyen: 20 ABD restoranı

`abd-restoranlar.json` — araştırması tamamlanmış, **henüz veri.js'e eklenmemiş** 20 kayıt
(New York, Chicago, New Orleans, D.C., Philadelphia, Charleston, San Francisco,
Healdsburg, Los Angeles, Atlanta). Kullanıcının onayı bekleniyor.

Eklemek için (proje kökünde):

```bash
python3 -c "
import json
yeni = json.load(open('docs/bekleyen/abd-restoranlar.json'))
icerik = open('veri.js').read()
bas = icerik.index('[')
veri = json.loads(icerik[bas:icerik.rindex(']')+1])
mevcut = {r['id'] for r in veri}
assert not [r['id'] for r in yeni if r['id'] in mevcut]
veri.extend(yeni)
open('veri.js','w').write(icerik[:bas] + json.dumps(veri, ensure_ascii=False, indent=2) + ';\n')
print(len(veri))
"
```

Sonra: `mutfak-gorselleri.js`/para birimi zaten USD ($) varsayılanını kullanır (PARA_BIRIMLERI'nde
USA yok, varsayılan $). Michelin rozetleri `michelin-yildiz` / `michelin-secilmis` / `michelin-bib`
olarak geldi; yıldız SAYISI rozetleri (`michelin-2-yildiz`, `michelin-3-yildiz`) elle düzeltilmeli:
Le Bernardin, SingleThread, Jungsik, Smyth → 3 yıldız; Atomix, César, Emeril's, Saison, Aska → 2 yıldız.
