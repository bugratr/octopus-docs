## Octopus Ağı Stake Etme

Octopus Network'ün LPoS'u (Kiralanmış Hisse Kanıtı), bahise katılan OCT sahiplerinden bir grup ağ bakımcısı seçmektir. Normal operasyona sahip doğrulayıcı ödülleri alacak, ancak görevlerini normal şekilde yerine getiremezse, stake edilen varlıklar kesilecek.

Stake etmede iki rol vardır: doğrulayıcı ve yetki veren. OCT sahipleri stakinge katılarak:

* Doğrulayıcı
     - Appchain'i seçin ve en az 5.000 OCT stake edin;
     - Doğrulayıcı düğümü çalıştırın, kullanılabilirliğinin mümkün olduğunca yüksek olduğundan emin olun
     - Serbest kalma süresi 21 gündür;
* Yetkilendiren
     - OCT'yi doğrulayıcıya devredin, başka hiçbir işlem gerekmez;
     - Serbest kalma süresi 21 gündür;

### Ödüller

#### Ödül Dağıtımı

LPoS'ta ödüller, blok oluşturma eğilimine göre hesaplanır ve dönem başına (yaklaşık 24 saat) kaydedilir. Bir doğrulayıcının blok oluşturma yanlılığı bir çağda beklenen %80'e ulaşırsa, bu çağın tam ödülü olacaktır.

Her 6 saniyede bir blok üretildiğini varsayarsak, günde 14.400 blok olacaktır. 100 doğrulayıcı varsa, bir doğrulayıcının 144 blok oluşturması beklenir. Bu çağda ürettiği blok sayısı 144*%80'den fazla olduğu sürece ödülün tamamını alır, aksi halde ödül olmaz.

Ayrıca ödüller, doğrulayıcı düğümün staking miktarına göre dağıtılır; bu, pay miktarı ne kadar yüksekse, mutabakatı oluştururken %100 kullanılabilir olduklarında doğrulayıcı düğümün alacağı ödülün o kadar yüksek olacağı anlamına gelir. Doğrulayıcı düğümün staking ödülü için, doğrulayıcı komisyon ücreti olarak %20 alır ve ardından kalan staking ödülleri, doğrulayıcı ve yetki veren arasında staking miktarıyla orantılı olarak dağıtılır.

Bir doğrulayıcı düğümün, doğrulayıcının 10.000 OCT hissesini, yetki veren A, B ve C'nin sırasıyla 3.000 OCT, 5.000 OCT ve 2.000 OCT'nin hissesini ve doğrulayıcı düğümün staking ödülünün 100 XYZ olduğunu, ardından ödül dağılımının olduğunu varsayıyoruz. aşağıdaki tabloda gösterilmiştir:

|             | Staked (OCT) | Ödüller (XYZ) |
| ----------- | ------------ | ------------- |
| Doğrulayıcı 0 | 10000        | 60            |
| Yetkili A | 3000         | 12            |
| Yetkili B | 5000         | 20            |
| Yetkili C | 2000         | 8             |

#### Ödülleri topla

Doğrulayıcı veya yetki verenin, ödülleri Ahtapot Uygulaması aracılığıyla manuel olarak talep etmesi gerekir. Staking ödülü, yaklaşık 84 gün olan 84 Era'ya kadar devam eder.

**Uyarı**: Onaylayan veya yetkilendiren, staking ödülünü dönem içinde talep etmezse, ödül sözleşmede kilitlenir ve talep edilemez.

### Otomatik unbond yapma

LPoS'ta, doğrulayıcı, birbirini izleyen 3 ödül döngüsünde (yaklaşık 3 gün) normal olarak blok oluşturmazsa, doğrulayıcı setinden kaldırılacaktır. Ancak mevcut ödüller hala talep edilebilir ve stake edilmiş OCT'ler, bağlanmama döneminden sonra geri çekilebilir.

### Kesme

LPoS'ta, doğrulayıcı düğüm ağda yanlış davranırsa, hem doğrulayıcı hem de delegeleri kesilerek OCT hissesinin belirli bir yüzdesini kaybeder.

Hangi büyük/küçük harfin kesileceğini anlamak için aşağıdaki koşula bakın.

* Koşul 1: Bir grup onaylayıcı, aynı yükseklikte birden fazla bloğu imzalar;
* Koşul 2: Doğrulayıcılardan oluşan bir grup, en az bir geçersiz tx içeren bir bloğu imzalar;
* Koşul 3: Bir grup doğrulayıcı, imzaladıkları bir blok başlığını haklı çıkarabilecek geçerli bir blokla veri kullanılabilirliği sorgulamasına tepki veremez;

Koşul 1'de, kesme oranını hesaplamak için aşağıdaki formül kullanılacaktır:
x = suçluların toplam stake'i, n = tüm doğrulayıcıların toplam stake'i olsun
Kesme Hızı = Min((3 * x/n)^2, 1)

2. ve 3. koşullarda, suçlular %100 oranında kesilecektir.

Bu kesik OCT'ler, yönetişim kararında doğrulayıcılara iade edilebilecekleri bir kamu hazinesine gönderilecek, örn. eğik çizgi, uygulama zinciri çalışma zamanı hatalarından kaynaklanır.
