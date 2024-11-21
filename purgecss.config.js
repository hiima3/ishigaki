module.exports = {
    content: [
        './index.html',   // HTMLファイルの場所を指定
    ],
    css: ['./assets/css/main.css'],  // 最適化するCSSファイル
    safelist: [
        /-mouse-enter/,   // .-mouse-enterクラスを持つ要素を除外
    ],
}
