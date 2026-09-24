# Kişisel site içerik arşivi

Bu dizin, sitedeki eski branch'lerden yeni site için derlenen içerikleri toplar. İncelenen 15 yerel/uzak branch `manifest.json` içinde listelenir; arşivdeki kaynaklar tarihsel kayıtlardır.

| Konum | İçerik |
| --- | --- |
| `profile/profile.md` | Kısa kimlik, eğitim, deneyim ve proje özeti |
| `profile/career-timeline.json` | `sheet` branch'indeki 46 ayrıntılı kariyer/yaşam girdisi |
| `profile/sources/` | Eski sitelerdeki özgün biyografi, CV, portfolyo ve kariyer kaynakları |
| `links.md` | Sosyal hesaplar ve projeler için seçilmiş bağlantılar |
| `links-inventory.json` | Branch metinlerinde bulunan bağlantıların kaynaklı dökümü |
| `images/` | Fotoğraflar, logolar, proje ve yazı görselleri |
| `documents/` | Seçilen güncel CV, sertifikalar, transkript ve teknik PDF'ler |
| `writing/drafts/` | Üç eski taslak |
| `writing/materials/` | Eski blog yazılarının örnek kod ve veri dosyaları |
| `manifest.json` | Her arşiv dosyasının kaynak branch/yolu ve Git blob kimliği |
| `rename-map.json` | Eski ve yeni dosya yollarının eşlemesi |

Dosyalar içerik kimliğine göre tekilleştirildi. Aynı adlı ama farklı içerikli dosyalar kısa blob kimliği eklenerek ayrı tutuldu. Medium'da yayımlanan yazıların yerel Markdown ve HTML kopyaları kaldırıldı; kanonik bağlantıları sitenin `src/data/external-posts.json` dosyasındadır. `bento` branch'indeki üç örnek “Hello, World” yazısı kişisel içerik olmadığı için alınmadı. Font Awesome/KaTeX gibi üçüncü taraf kütüphane dosyaları alınmadı.

Arşiv dosyaları doğrudan `public/` altındadır. Her dosyaya dağıtımdan sonra kök URL'den erişilebilir; örneğin CV `/documents/enesdemirag-resume.pdf` yolundadır. Eski CV ve özgeçmiş PDF'leri kaldırılmıştır. Transkript, dil belgesi, kişisel telefon ve özel hayat girdileri hâlâ arşivde bulunabilir. Eski kaynaklarda görünen GitHub görsel URL'lerindeki `?token=` sorguları arşiv kopyalarından çıkarıldı; bu işlem `manifest.json` içinde işaretlidir.

Bağlantılar ve “Present” tarihli kariyer ifadeleri arşivdeki metinlerden alınmıştır; güncel durumları doğrulanmadı. Görsellerin hak sahipliği de kaynaklardan anlaşılmıyor.

Arşiv dosya ve klasör adları İngilizce kebab-case biçimine dönüştürüldü. Astro'nun alan adını tanıması için gerekli `CNAME` dosyası özel adını korur. `manifest.json` içindeki `sources.path` alanları tarihsel Git yollarını aynen korur. Sonradan eklenen dosyalar manifestte `local_asset` olarak işaretlidir.
