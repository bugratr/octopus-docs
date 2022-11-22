## Appchain Geliştirme

Bu eğitimde şunları yapacağız:

1. Geliştirme ortamını kurun;
2. Uygulama zinciri çalışma zamanını uygulayın;
3. Yerel test ağını başlatın;

### Geliştirme Ortamını Kurun

Octopus Network ekibi tarafından geliştirilen bir şablon olan [Barnacle](https://github.com/octopus-network/barnacle) tabanlı bir Appchain düğümü başlatmanız önerilir. [Substrate düğüm şablonundan](https://github.com/substrate-developer-hub/substrate-node-template) alınan Barnacle, geliştiricilerin Octopus Appchain projelerini hızla başlatmaları için minimal çalışan bir Appchain düğüm şablonudur. Bir Appchain'in ön ucu, [Ön uç şablonu](https://github.com/substrate-developer-hub/substrate-front-end-template) temel alınarak geliştirilebilir.

Not: Substrat geliştirme, macOS veya Linux gibi Unix tabanlı işletim sistemlerinde en kolay olanıdır ve Windows kullanıcıları için Windows Subsystem Linux (WSL) kullanmaları ve Ubuntu/Debian yönergelerini izlemeleri önemle tavsiye edilir.

Çoğu kullanıcı için, ortamı yüklemek için aşağıdaki komutları yürütebilirsiniz.

`curl https://getsubstrate.io/ -sSf | bash -s - --fast`

Daha fazla bilgi için lütfen Substrate Developer Center'daki [Kurulum Kılavuzuna](https://substrate.dev/docs/en/knowledgebase/getting-started/) bakın.

### Barnacle

Appchain düğüm şablonu Barnacle, Substrate düğüm şablonunu temel alır ve Octopus ağ ekibi tarafından uygulanan bir dizi [octopus-pallets](https://github.com/octopus-network/octopus-pallets) entegre eder. :

* Appchain, [pallet-octopus-appchain](https://github.com/octopus-network/octopus-pallets/tree/main/appchain)
    - Bir uygulama zincirinin meta verileri. Uygulama zinciri tanımlayıcısı, ana zincirin RPC uç noktası vb. dahil.
    - Uygulama zincirinin doğrulayıcıları, ana zinciri gözlemleyecek ve fikir birliği için OCW'yi kullanarak gözlemlenen olayları sunacaktır.

* LPoS, [palet-ahtapot-lpos](https://github.com/octopus-network/octopus-pallets/tree/main/lpos)
    - Octopus Network'ün LPoS'sinin bir uygulaması.
    - Bu palet, palet-ahtapot-uygulama zincirine bağlıdır.

* Ortak, [pallet-octopus-support](https://github.com/octopus-network/octopus-pallets/tree/main/support)
    - Bazı ortak özellikler ve türler.

* Zincirler arası mesajlar, [pallet-octopus-upward-messages](https://github.com/octopus-network/octopus-pallets/tree/main/upward-messages)
    - Bu palet, uygulama zincirinden ana zincire gönderilen zincirler arası mesajları yönetir.
    
```yaml
git clone --depth 1 https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build
```

Barnacle'a dayalı olarak, uygulama zinciri ekibinin yalnızca iş işlevinin palet geliştirmeye odaklanması yeterlidir ve ardından uygulama zincirini Ahtapot ağına kolayca entegre edebilirler.

### Ön uç şablonu

```yaml
# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install node
# Install Yarn
npm install --global yarn
# Clone the frontend template from github
git clone -b v3.0.0+monthly-2021-08 --depth 1 https://github.com/substrate-developer-hub/substrate-front-end-template
# Install the dependencies
cd substrate-front-end-template
yarn install
```

> **Not**
>
> "substrate-front-end-template"in daha yeni bir sürümü varsa, yukarıdaki komutta "v3.0.0+aylık-2021-08" öğesinin bununla değiştirilmesi önerilir.

### Uygulama zinciri çalışma zamanını uygulama

Uygulamaya özel paletleri uygulama adımları:

1. Bir "palet" ekleyin ve "pallets/<pallet-name>/src/lib.rs" içinde uygulamaya özel mantık uygulayın;
2. "palet"i "runtime/Cargo.toml", "runtime/src/lib.rs" içine ekleyin;
3. "çalışma zamanı"nı "node/Cargo.toml" içine ekleyin, düğüme kurun.

**Not**: Şu anda lütfen `MILLISECS_PER_BLOCK` değerini 6000 olarak ayarlayın.

Daha fazla bilgi için lütfen Substrate Developer Center'daki [Çalışma Zamanına Palet Ekleme Kılavuzuna](https://substrate.dev/docs/en/tutorials/add-a-pallet/) bakın.

#### Appchain konfigürasyon

Appchain yapılandırması esas olarak ChainSpec dosyasındadır. Yapılandırmanız gerekenler:

* Appchain paleti
     - Çapa sözleşmesi;
     - Doğrulayıcı koleksiyonu;
     - NEAR ağında önceden kazılmış jeton sayısı;

Barnacle örneği aşağıdaki gibidir:

```Rust
"octopusAppchain": {
  "anchorContract": "barnacle.registry.test_oct.testnet",
  "validators": [
    [
      "5G6xVxyaS8PZargUL27pSEbhLQbRQJ2PBvrvXVpyjHzivQxs",
      10000000000000000000000
    ],
    [
      "5Dqg8gjTeM4it3mCaX1bdQmTT3GXgv7oSuZAfFUwJaTKuJfz",
      10000000000000000000000
    ],
    [
      "5Gj5yzSKtqkMM3j7FhRSWuybkwwms9KBPsAhyeobgmLD4r1g",
      10000000000000000000000
    ],
    [
      "5F42cCzboJhzfuVazARY6gFVpjwWMwAg1aG3pWF2aS76uu4Q",
      10000000000000000000000
    ]
  ],
  "preminedAmount": 500000000000000000000000000,
  "assetIdByName": [
    [
      "usdc.testnet",
      0
    ]
  ]
},
```

* LPoS paleti
     - LPoS ödüllerinin tarihsel döngüsü;
     - Her Çağ için Ödüller;

Barnacle örneği aşağıdaki gibidir:

```Rust
"octopusLpos": {
  "historyDepth": 84,
  "eraPayout": 20000000000000000000000
},
```

### Yerel Testnet'i başlatın

Yerel blockchain düğümünü derlemek ve başlatmak için aşağıdaki komutu yürütün:

```yaml
cargo build
# Run a temporary node in development mode
./target/debug/appchain-barnacle --dev --tmp
```

Yerel düğümlerle etkileşim kurmak için yerel bir ön uç çalıştırmak istiyorsanız [Yerel Ön Uç Çalıştır](https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain)'e başvurabilirsiniz. /interact#start-the-front-end-şablonu).

### Appchain Sürümünü Yayınlayın
    
Appchain geliştirmesini ve Ahtapot Paletlerinin entegrasyonunu tamamladıktan sonra, Appchain ekibinin Appchain'in bir sürümünü yayınlaması gerekir.
    
> **Not**
>
> * Chain Spec dosyası, kaynak kodun bir klasörünün altına yerleştirilebilir. E.g:[resources](https://github.com/octopus-network/barnacle/tree/master/resources)
> * Entegrasyon için lütfen [Barnacle]'a bakın.(https://github.com/octopus-network/barnacle)
