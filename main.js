//Level_1
//1. 変数`x`に文字列の`"Hello"`を代入して、`x`の値を表示するコードを書いてください。
var x = 'Hello';
    console.log(x)

//2. 変数`y`に数字の`7`を代入して、`y`の値を表示するコードを書いてください。
var y = 7;
    console.log(y)

//3. 変数`z`に真偽値の`true`を代入して、`z`の値を表示するコードを書いてください。
var z = 10;
    console.log(z===10)

//Level_2
//1. 変数`age`に数字を代入し、`age`が`20`以上`65`未満の場合は`"成人です"`、それ以外の場合は`"成人ではありません"`と表示するコードを書いてください。
let age = 23;
if (age>=20 && 65>age){
    console.log("成人です")
}
else{
    console.log("成人ではありません")
}

//2. 変数`num`に数字を代入し、`num`が`0`以上かつ`10`未満の場合は`"0以上10未満"`、それ以外の場合は`"0未満または10以上"`と表示するコードを書いてください。
var num = 4;
if (num>=0 && 10>num){
    console.log("0以上10未満")
}

else{
    console.log("0未満または10以上")
}

//3. 変数`name`に文字列を代入し、`name`の値を`"My name is "`と結合して表示するコードを書いてください。
var name = 'Yusuke';
console.log("My name is" + name)


//Level_3
//1. 変数`score`に数字を代入し、`score`が`80`以上の場合は`"合格"`、`60`以上`80`未満の場合は`"補欠合格"`、`60`未満の場合は`"不合格"`と表示するコードを書いてください。
var score = 77;
if (score>=80){
    console.log("合格")
}

if (score>=60 && 80>score){
    console.log("補欠合格")
}

if (score<60){
    console.log("不合格")
}

//2. 変数`num`に数字を代入し、`num`が`0`であれば`"0です"`、そうでない場合は`"0ではありません"`と表示するコードを書いてください。
var num = 0;
if(num === 0)
    console.log("0です")

if(num !== 0){
    console.log("0ではありません")
}
   

//3. 変数`age`と`gender`に数字と文字列を代入し、`age`が`20`以上`65`未満であり、かつ`gender`が`"female"`の場合は`"成人の女性です"`、そうでない場合は`"成人ではないか、または男性です"`と表示するコードを書いてください。
let age1 = 18;
let gender = "female";
if(age1>=20 && 65>age1 && gender == "female") {
    console.log("成人の女性です")
} else {
    console.log("成人ではないか、または男性です")
}

//4. 変数`num1`と`num2`に数字を代入し、`num1`が`num2`より大きい場合は`"num1の方が大きい"`、`num2`が`num1`より大きい場合は`"num2の方が大きい"`、等しい場合は`"同じ値"`と表示するコードを書いてください。
var num1 = 5
var num2 = 10
if(num1>num2);
    console.log("num1の方が大きい")
if(num1<num2);
    console.log("num2の方が大きい")
if(num1=num2);
    console.log("同じ値")

//5. 変数`hour`に数字を代入し、`hour`が`6`時以上`12`時未満の場合は`"おはようございます"`、`12`時以上`18`時未満の場合は`"こんにちは"`、`18`時以上`24`時未満の場合は`"こんばんは"`、`0`時以上`6`時未満の場合は`"おやすみなさい"`と表示するコードを書いてください。
var hour = 11
if(hour>=6 && 12>hour);
    console.log("おはようございます")
if(hour>=12 && 18>hour);
    console.log("こんにちは")
if(hour>=18 && 24>hour);
    console.log("こんばんは")
if(hour>=0 && 6>hour);
    console.log("おやすみなさい")
