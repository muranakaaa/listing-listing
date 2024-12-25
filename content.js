function showAdUrls() {
  // .uEierd内の.v5yQqb > aを取得
  const ads = document.querySelectorAll('.uEierd .v5yQqb a');
  const adUrls = Array.from(ads).map(ad => ad.href);

  // 最初の.uEierd要素を基準にする
  const firstAdBox = document.querySelector('.uEierd');
  if (!firstAdBox) {
    console.log('.uEierd要素が見つかりません。');
    return;
  }

  // 広告URLリストを表示するボックスを作成
  let adBox = document.getElementById('ad-url-box');
  if (!adBox) {
    adBox = document.createElement('div');
    adBox.id = 'ad-url-box';

    // ボックスのスタイルを設定
    adBox.style.position = 'absolute';
    adBox.style.top = '0'; // .uEierdの上端に合わせる
    adBox.style.left = 'calc(100% + 50px)'; // .uEierdの右端から10px離す
    adBox.style.width = '450px';
    adBox.style.backgroundColor = '#ffffff';
    adBox.style.border = '1px solid rgb(118, 118, 118)';
    adBox.style.padding = '10px';
    adBox.style.fontSize = '14px';

    // .uEierdの親要素にボックスを挿入
    firstAdBox.parentElement.appendChild(adBox);
  }

  // URLリストを更新
  adBox.innerHTML = '<strong>広告URL一覧:</strong><ul style="list-style:none; padding:0;">';
  adUrls.forEach(url => {
    const listItem = document.createElement('li');
    listItem.style.wordBreak = 'break-word'; // 長いURLを折り返す
    listItem.textContent = url;
    adBox.appendChild(listItem);
  });
  adBox.innerHTML += '</ul>';
}

// 初回実行
showAdUrls();
