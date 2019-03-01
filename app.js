const getPostWord = (str, firstVal, secondVal) => {
    try {
        let lastStr = str[str.length-1].charCodeAt(0);
        // 한글의 제일 처음과 끝의 범위밖일 경우는 오류
        if(lastStr < 0xAC00 || lastStr > 0xD7A3) {
            return str;
        }
        let lastCharIndex = (lastStr - 0xAC00) % 28;
        // 종성인덱스가 0이상일 경우는 받침이 있는경우이며 그렇지 않은경우는 받침이 없는 경우
        if(lastCharIndex > 0) {
            // 받침이 있는경우
			// 조사가 '로'인경우 'ㄹ'받침으로 끝나는 경우는 '로' 나머지 경우는 '으로'
            if(firstVal === "으로" && lastCharIndex === 8)
                str += secondVal;
            else
                str += firstVal;
        } else {
            // 받침이 없는 경우
            str += secondVal;
        }
    } catch(e) {
        console.error(e);
    }

    return str;
}

let name;
name = "네이버";
console.log(getPostWord(name, "으로", "로"));
console.log(getPostWord(name, "을", "를"));
console.log(getPostWord(name, "이", "가"));
console.log(getPostWord(name, "은", "는"));
console.log(getPostWord(name, "과", "와"));

name = "카카오톡";
console.log(getPostWord(name, "으로", "로"));
console.log(getPostWord(name, "을", "를"));
console.log(getPostWord(name, "이", "가"));
console.log(getPostWord(name, "은", "는"));
console.log(getPostWord(name, "과", "와"));

name = "구글";
console.log(getPostWord(name, "으로", "로"));
console.log(getPostWord(name, "을", "를"));
console.log(getPostWord(name, "이", "가"));
console.log(getPostWord(name, "은", "는"));
console.log(getPostWord(name, "과", "와"));

name = "문화포털";
console.log(getPostWord(name, "으로", "로"));
console.log(getPostWord(name, "을", "를"));
console.log(getPostWord(name, "이", "가"));
console.log(getPostWord(name, "은", "는"));
console.log(getPostWord(name, "과", "와"));
