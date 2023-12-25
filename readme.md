# 阪進数API
## 概要
阪進数APIは、2005年日本シリーズにおける、千葉ロッテマリーンズ対阪神タイガースの合計スコア「33対4」から生まれた数え方(以下，阪進数と表記)を10進数から変換するAPI．
### 阪進数とは
阪進数と10進数の対応は，以下の通り．
>nは10進数の任意の正の整数とする．<br>
> 阪進数 = [33*n] - [4*n]

#### 例:

| 10進数 | 阪進数 |
|:---:|:---:|
| 1 | 33 - 4 |
| 2 | 66 - 8 |
|10 | 330 - 40 |

## 使い方
### リクエスト
http://localhost:5000/hanshin/[10進数]  にGETリクエストを送る．
### レスポンス
阪進数に変換した結果を返す．
### 生存確認
pingを送るとpongを返す．
## 動作例
| リクエスト | レスポンス  |
|:---:|:------:|
| http://localhost:5000/hanshin/1 | 33 - 4 |
| http://localhost:5000/hanshin/2 | 66 - 8 |
| http://localhost:5000/hanshin/10 | 330 - 40 |

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)
