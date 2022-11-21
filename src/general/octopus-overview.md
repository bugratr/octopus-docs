## Octopus Ağı'na Genel Bakış

Octopus Ağı, Appchain olarak da bilinen uygulamaya özel blok zincirlere hizmet etmek için doğmuş yepyeni bir çok zincirli ağdır. Ahtapot Ağı, uygulama zincirleri için esnek ve uygun fiyatlı kiralık güvenlik, kullanıma hazır çapraz zincir birlikte çalışabilirlik, tek noktadan altyapı ve bağlanmaya hazır bir topluluk sağlar.

![Octopus Ağı Altyapısı](../images/general/Octopus_Architecture.png)

Mimari diyagramdaki kısaltmaların tam adı:

| Kısaltmalar | Tam Ad |
|------|------|
| D | Delegator, OCT'yi staking için doğrulayıcıya devreder |
| S | Stake etme, appchain güvenliğini sağlar |
| V | Doğrulayıcı, hisse OCT ve hisse için doğrulayıcı düğümü çalıştırır |
| RT | (Substrate) RunTime, uygulama zinciri uygulama mantığıdır |
| N | Düğüm, uygulama zinciri tam düğümleri | 

### Octopus Rölesi

Octopus Relay, menkul kıymet kiralama pazarını uygulayan NEAR blok zinciri, diğer adıyla ana zincir üzerinde çalışan bir dizi [akıllı sözleşme] (https://github.com/octopus-network/octopus-relay-contract) olan Ahtapot Ağı'nın çekirdeğidir.


### Appchain

Bir Octopus Appchain, belirli bir merkezi olmayan uygulama için yapılmış, Substrat tabanlı bir blok zinciridir. [pallet-octopus-appchain](https://github.com/octopus-network/pallet-octopus-appchain) paletini entegre ettikten sonra, Appchain Ahtapot Ağı'na sabitlenecek şekilde donatılacaktır.

### Doğrulayıcı

Ahtapot Ağında, OCT sahipleri onaylayıcı veya yetki veren olmak için OCT'leri stake edebilir. Doğrulayıcılar, OCT'yi stake ederek ve Appchain'in [doğrulayıcı düğümlerini çalıştırarak](../maintain/validator-guide.md) Appchain'leri güvence altına alır. Yetki verenler, stake ettikleri OCT'yi dürüst doğrulayıcılara devrederek Appchains'in güvenliğini sağlar.

Doğrulayıcılar, işlemleri ve blokları doğrulayarak karşılık gelen Uygulama Zincirlerinin yerel belirteci ile ödüllendirilir. Bir doğrulayıcı ağda yanlış davranırsa (örn. çevrimdışı olmak, ağa saldırmak veya kötü amaçlı yazılım çalıştırmak), hem doğrulayıcının hem de yetki verenlerin hisseli OCT'si orantılı olarak kesilir.
