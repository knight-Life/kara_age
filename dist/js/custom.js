  var $section = $('.js-section'); // 各スライド
  var $pager = $('#js-pager'); // ページャー枠
  var option = {
    section: '.js-section', // 対象を指定
    easing: "swing", // イージングをしてい(jQueryのanimation)
    scrollSpeed: 600, // スクロール時の速度
    scrollbars: true, // スクロールバーを表示するか
    before: function(index, section) {
      setCurrent(index);
      pagerCurrent(index);
    },
    afterRender: function() {
      createPager();
      setCurrent();
    }
  };

  $(function() {
    $.scrollify(option); // scrollifyの実行
  });

  function createPager() {
    $section.each(function(i, e) {
      var sectionName = $(e).attr('data-section-name');
      var addClass = '';
      if (i === 0) {
        addClass = 'is-current';
      }
      var html = '';
      html += '<li class="' + addClass + '">';
      html += '<a href="#"' + sectionName + '></a>';
      html += '</li>';
      $pager.append(html);
    });

    pagerLink();
  }

  function pagerLink() {
    $pager.find('a').on('click', function() {
      $.scrollify.move($(this).attr("href"));
    });
  }

  function pagerCurrent(index = 0) {
    var $li = $pager.find('li');
    $li.removeClass('is-current');
    $li.eq(index).addClass('is-current');
  }

  function setCurrent(index = 0) {
    $section.removeClass('is-show');
    $section.eq(index).addClass('is-show');
  }

  $('.kara-info').on('click', function() {
    var kara = $(this).attr('id');
    switch (kara) {
      case 'teba':
        console.log('手羽先');
        admission(0);
        break;
      case 'miso':
        console.log('印西みそピー');
        admission(1);
        break;
      case 'nakatsu':
        console.log('中津！');
        admission(2);
        break;
      case 'sanzoku':
        console.log('山賊焼');
        admission(3);
        break;
      case 'kuro':
        console.log('黒からあげ');
        admission(4);
        break;
      case 'nanban':
        console.log('南蛮');
        admission(5);
        break;
      case 'hanba':
        console.log('半羽');
        admission(6);
        break;
      case 'zangi':
        console.log('赤きサイクロン');
        admission(7);
        break;
    }
  });

  function admission(num) {
    $('.modal-body img').remove();

    var n = [
      '手<span class="text-red">羽</span>先唐揚げ',
      '印西みそ<span class="text-red">ピー</span>唐揚げ',
      '中<span class="text-red">津</span>からあげ',
      '<span class="text-red">山</span>賊焼',
      '<span class="text-black">黒</span>からあげ',
      'チキン<span class="text-red">南蛮</span>',
      '半<span class="text-red">羽</span>揚げ',
      'ザン<span class="text-red">ギ</span>'
    ];
    var i = [
      '手羽先はこの県が完成させた!!<br>名古屋の切り札!!<br>手羽先唐揚げだ!!!',
      '名産の土産に落花生とはよく言ったもの!!<br>印西の名物が今<br>ご当地でバクハツする!!<br>印西産落花生<br>印西みそピーから揚げだ―――!!!',
      '九州だったらこの県を外せない!!<br>超Ａ級唐揚都市大分<br>中津からあげだ!!!',
      '同名の料理は２種類だが美味さなら全鶏料理オレのものだ!!<br>長野の鉄板　山賊焼だ!!!',
      'クロォォォォォいッ説明不要!!<br>岐阜県関市!!!　まるで“炭”!!!<br>黒からあげだ!!!',
      'オレたちは唐揚げ最強ではない鶏肉料理で最強なのだ!!<br>御存知宮崎　チキン南蛮!!!',
      '唐揚げの本場は今や骨付きにある!!<br>オレを驚かせる奴はいないのか!!半羽揚げだ!!!',
      '美味き王者が帰ってきたッ<br>どこが発祥なンだッ<br>チャンピオンッッ俺達は君を待っていたッッッ<br>ザンギの登場だ――――――――ッ'
    ];
    var s = [
      '手羽先唐揚げを最初に出した店は、名古屋の鶏料理店「風来坊」である。<br>当時の店主だった大坪健庫が北九州市にいた当時、鶏の半身をまるごと使ったから揚げに秘伝のタレで調味する「ターザン焼き」を開発した。<br>その後の1963年、名古屋市熱田区に店を構えた大坪は、ある日当時出汁を取るためだけに使われていた手羽先をから揚げにしてターザン焼きのタレを付けることを思い付き、メニューとして客に出してみたところ、その手軽さがターザン焼きには手が出せない客にも受けたのでメニューとして定着した。<br>発想のきっかけは大坪が仕入れ先で鳥手羽先の山を見たことからと同店公式サイトには記載されているが、ターザン焼き用の鶏肉を仕入れ忘れ苦肉の策で手羽先を用いたことからと紹介される場合もある。<small>(<a href="https://ja.wikipedia.org/wiki/%E6%89%8B%E7%BE%BD%E5%85%88%E5%94%90%E6%8F%9A%E3%81%92" target="_blank"><u>Wikipedia</u></a>より転載)</small>',

      '印西みそピー唐揚げは、いんざいご当地ぐるめ選手権で1位にも輝いたご当地グルメで、<br>郷土料理である、ピーナッツと甘辛味噌で作った「味噌ピーナッツ（みそピー）」と鳥のから揚げを絡めたもの。<br>みそピーを知らない他県の人には驚きの味で、食べた時に受けるインパクトに驚く事間違いなし。<br>コクのある甘辛味のみそピーと唐揚げのコラボは、一度食べればヤミツキになる美味しさ。<small>(<a href="http://kenmin.machi-pla.com/food/item?kenmin_id=12100008" target="_blank"><u>ケンミン食</u></a>より転載)</small>',

      '中津市で初めてのからあげ専門店は、1970年7月に開店とされる。当時、中津市にはからあげ専門店はなく、大分県北部でも宇佐市四日市にあった「からあげ庄助」が唯一のからあげ専門店であった。このため、宇佐市がからあげ専門店の発祥の地とされ、からあげ専門店はここから西に隣接する中津市へと広まった。<br>中津市にからあげ専門店が多く存在する理由としては、戦後の食糧難対策として政府が養鶏を推進したため、中津市内に多くの養鶏場があり鶏肉が容易に入手できたこと、旧満州から引き揚げてきた人が中国の鶏料理を再現したこと、惣菜店が揚げたてのからあげを提供したことが評判になり、からあげを出す惣菜店が増えたこと、等が挙げられている。<br>「中津からあげ」という名称は、森山からあげ店が2003年頃に中津市大貞店を出店した際に用いたのが最初とされる。<small>(<a href="https://ja.wikipedia.org/wiki/%E4%B8%AD%E6%B4%A5%E3%81%8B%E3%82%89%E3%81%82%E3%81%92" target="_blank"><u>Wikipedia</u></a>より抜粋)</small>',

      '一つは、長野県中信地方（塩尻市・松本市等）の郷土料理として広まったもので、鶏もも肉を、すり下ろしたニンニクやタマネギを効かせた醤油タレに漬け込み、片栗粉をまぶして油で揚げる。端的には「鶏もも肉の唐揚げの大きいもの」で、山賊揚げとも呼ばれる。<br>ただし、もも肉だけでなく比較的安価な胸肉など他の部位が使われる場合もある。「山賊“焼き”」と称するが、実際に焼いたわけではなく、調理法としては揚げる料理である。<br>もう一つは、骨付きの鶏もも肉を一本丸ごとオーブンやグリル、炭火等でニンニク風味の照り焼き風のたれに絡めてあぶり焼きにしたローストチキン風の料理。<br>西日本の多くの地域では山賊焼と言いえば通常こちらの料理を指す。単に「（骨付きに限らず）鶏肉の照り焼き風」を山賊焼きと称することもある。<small>(<a href="https://ja.wikipedia.org/wiki/%E5%B1%B1%E8%B3%8A%E7%84%BC" target="_blank"><u>Wikipedia</u></a>より抜粋)</small>',

      'この“黒からあげ”は、09年に「岐阜県関市をもっと元気にしたい！」と考えた有志が集まり、新名物として考案されたメニューで、現在では同市内9店舗で販売されている。｢関からあげ学会｣の広報担当者も、「初めて見る人はすごくびっくりしますね」と話すように、“からあげ”というより、まるで“炭”のような見た目はインパクト抜群のようだ。<br>“黒からあげ”の条件は、シイタケとヒジキを使用しており、見た目が黒いことだけ。市内各店がそれぞれに工夫を凝らした“黒からあげ”を販売しているという。<small>(<a href="https://news.walkerplus.com/article/17162/" target="_blank"><u>NewsWalker</u></a>より抜粋)</small>',

      'この料理の発祥説は2説ある。「直ちゃん」をチキン南蛮の元祖とする説と、タルタルソースのチキン南蛮を考案した「おぐら」を元祖とする説である。<br>かつて宮崎県延岡市内にあった洋食店「ロンドン」で昭和30年代に出されていた賄い料理の一つに、衣を付けて揚げた鶏肉を甘酢にさっと浸した料理があった。この店で働いていた後藤直が、これを大衆食堂お食事の店「直ちゃん」にて売り出した。タルタルソースは使用しない。<br>現在の主流となっている、タルタルソースを掛けたチキン南蛮を考案したのは、同じくロンドンで働いていた甲斐義光とされる。宮崎市の「おぐら」2号店としてオープンした「洋食屋ロンドン」にて1965年に販売された。<br>どちらの説も宮崎県延岡市が発祥とされている。<small>(<a href="https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%AD%E3%83%B3%E5%8D%97%E8%9B%AE" target="_blank"><u>Wikipedia</u></a>より抜粋)</small>',

      '新潟県の新潟市から三条市を中心に食されている鶏肉のから揚げ。<br>縦半分に捌いた若鶏肉を下味を付けずに骨付きのまま極薄い粉衣を付けて揚げた物。<br>そのままで提供される店と一口大に切ってから提供される店がある。<br>塩味と薄くカレー粉がまぶされていることが多い。好みでガーリックパウダーを振って食する。<small>(<a href="https://ja.wikipedia.org/wiki/%E3%81%8B%E3%82%89%E6%8F%9A%E3%81%92" target="_blank"><u>Wikipedia</u></a>より抜粋)</small>',

      'ザンギは北海道で広く用いられる呼称である。料理の名前であり「から揚げにしたもの」という意味を持つと、くしろザンギ推進協議会 は定義している。<br>また、日本唐揚協会や北海道ザンギ愛好会は、「「ザンギ」と「唐揚げ」の垣根が曖昧なこともあり、同一のものとする見方が強まっている」という見解を示している。<br>ザンギの調理法としては鶏肉を醤油とニンニクなどの調味料で味付けし、そこへ片栗粉及び小麦粉を混ぜ揚げたものである。<br>また、ザンギの名称は、鶏以外の食材（獣肉 : 豚・羊・鹿、魚介類 : タコ・イカ・鮭など）のから揚げに対しても用いられ、料理法として一般名詞化している。鶏肉以外で作る場合、材料名を足して「蛸（タコ）ザンギ」などと呼ぶことが多い。<small>(<a href="https://ja.wikipedia.org/wiki/%E3%81%8B%E3%82%89%E6%8F%9A%E3%81%92" target="_blank"><u>Wikipedia</u></a>より抜粋)</small>'
    ];
    var img = ['teba', 'miso', 'nakatsu', 'sanzoku', 'kurokara', 'nanban', 'hanba', 'zangi'];
    var src = 'url(image/compression/kara_photo/' + img[num] + '.png)';

    $('#js-ModalLabel').html(n[num]);
    $('.modal-body h4').html(i[num]);
    $('.modal-body p').html(s[num]);
    //現在のimgからsrcを取得し、一部を書き換える
    $('.modal-body').css('background-image', src);
  }
