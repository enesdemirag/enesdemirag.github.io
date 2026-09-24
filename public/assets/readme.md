# Kişisel site içerik arşivi

Bu klasör, sitedeki eski branch'lerden yeni bir site kurulurken kullanılabilecek içerikleri toplar. İncelenen 15 yerel/uzak branch `manifest.json` içinde listelenir. Branch'ler silinmedi; mevcut site dosyaları değiştirilmedi.

| Konum | İçerik |
| --- | --- |
| `profile/profile.md` | Kısa kimlik, eğitim, deneyim ve proje özeti |
| `profile/career_timeline.json` | `sheet` branch'indeki 46 ayrıntılı kariyer/yaşam girdisi |
| `profile/sources/` | Eski sitelerdeki özgün biyografi, CV, portfolyo ve kariyer kaynakları |
| `links.md` | Sosyal hesaplar ve projeler için seçilmiş bağlantılar |
| `links_inventory.json` | Branch metinlerinde bulunan bağlantıların kaynaklı dökümü |
| `images/` | Fotoğraflar, logolar, proje ve yazı görselleri |
| `documents/` | CV sürümleri, sertifikalar, transkript ve teknik PDF'ler |
| `writing/published/` | Blog yazılarının farklı yayın sürümleri |
| `writing/drafts/` | Üç eski taslak |
| `writing/materials/` | Eski blog yazılarının örnek kod ve veri dosyaları |
| `writing/legacy_html/` | İki HTML yazı sürümü |
| `manifest.json` | Her arşiv dosyasının kaynak branch/yolu ve Git blob kimliği |
| `rename_map.json` | Eski ve yeni dosya yollarının eşlemesi |

Dosyalar içerik kimliğine göre tekilleştirildi. Aynı adlı ama farklı içerikli dosyalar kısa blob kimliği eklenerek ayrı tutuldu. Eski Jekyll yazıları ve mevcut Astro yazıları ayrı sürümler olarak korundu. `bento` branch'indeki üç örnek “Hello, World” yazısı kişisel içerik olmadığı için alınmadı. Font Awesome/KaTeX gibi üçüncü taraf kütüphane dosyaları alınmadı.

Bu klasör artık `public/assets/` altında. İçindeki bütün dosyalara dağıtımdan sonra `/assets/` URL'si üzerinden erişilebilir. Eski CV, transkript, dil belgesi, kişisel telefon ve özel hayat girdileri de buna dahildir. Eski kaynaklarda görünen GitHub görsel URL'lerindeki `?token=` sorguları arşiv kopyalarından çıkarıldı; bu işlem `manifest.json` içinde işaretlidir.

Bağlantılar ve “Present” tarihli kariyer ifadeleri arşivdeki metinlerden alınmıştır; güncel durumları doğrulanmadı. Görsellerin hak sahipliği de kaynaklardan anlaşılmıyor.

Dosya ve klasör adları İngilizce `snake_case` biçimine dönüştürüldü. `manifest.json` içindeki `sources.path` alanları tarihsel Git yollarını aynen korur. Sonradan eklenen dosyalar manifestte `local_asset` olarak işaretlidir.
