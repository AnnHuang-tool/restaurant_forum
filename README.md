# 餐廳論壇 
使用Node.js + Express打造的餐廳論壇。

## 產品功能 
・使用者可註冊登入新建餐廳資料

・餐廳後台管理者可瀏覽編輯跟刪除資料

・點擊我的餐廳評論網可以回到首頁。

## 測試帳號

帳號 1：
email: root@example.com

password: 12345678


帳號 2：
email: user1@example.com

password: 12345678



## 安裝方式 
1. 開啟終端機，進入至欲儲存此專案的資料夾，並clone此專案

`git clone https://github.com/ChubbyKay/restaurant_forum.git`

2. 進入專案資料夾

`cd restaurant_forum `

3. 在進入專案資料的狀態下安裝套件

`npm install`

4.安裝nodemon

`npm install nodemon`

5. 環境變數設定
`cp .env.example .env`

6. 載入種子資料
`npm run seed`

7. 啟動程式

`npm run dev`

成功啟動後，終端機會顯示 Express is listening on localhost:3000

請在瀏覽器網址輸入` localhost:3000 `，即可開啟

*需要創建 .env.development 以便在本機端開啟伺服器


## 開發環境

<安裝需求>

git : v2.27.0.windows.1

nvm : v1.1.7

node : v10.15.0

npm : v6.4.1

nodemon : v2.0.4

<npm套件>

express : v4.17.1

express-handlebars : v5.1.0

body-parser : v1.19.0

method-override : v3.0.0

bcryptjs : v2.4.3

connect-flash : v0.1.1

dotenv : v8.2.0

express-session : v1.17.1

passport : v0.4.1

passport-local : v1.0.0

faker : v5.1.0

imgur-node-api : v0.1.0

multer : v1.4.2

mysql2 : v2.1.0

pg : v8.3.3

sequelize : v6.3.5

sequelize-cli : v6.2.0


## 專案畫面
![MyImage](https://upload.cc/i1/2020/09/11/RrG6fy.jpg
)