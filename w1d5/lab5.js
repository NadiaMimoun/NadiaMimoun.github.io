//myFunctionTest
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

//function max():    
      function max(a, b) {
        if (a < b) {
          return b;
        }
        return a;
      }
      console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

      
 //function maxofthree():      
      function maxofthree(a, b, c) {
        if (a > b && a > c) {
          return a;
        }
        if (b > a && b > c) {
          return b;
        }
        if (c > a && c > b) {
          return c;
        }
      }
      console.log("Expected output of maxofThree(5,4,44) is 44  " + myFunctionTest(44, maxofthree(5, 4, 44)));
      console.log("Expected output of maxofThree(55,4,44) is 55  " + myFunctionTest(55, maxofthree(55, 4, 44)));
      
      console.log("Expected output of maxofThree(55,4,44) is 55  " + myFunctionTest(4, maxofthree(55, 4, 44)));
      
//function isVowel():        
      function isVowel(s) {
        if (
          s === "a" ||
          s === "e" ||
          s === "i" ||
          s === "u" ||
          s === "o" ||
          s === "y"
        ) {
          return true;
        }
        return false;
      }
      console.log("Expected output of isVowel(s) is false  " + myFunctionTest(false,isVowel("s")));
      console.log("Expected output of isVowel(e) is true  " + myFunctionTest(true,isVowel("e")));
      console.log("Expected output of isVowel(i) is true  " + myFunctionTest(false,isVowel("i")));
     
//function sum():        

      function sum(a) {
        var sum=0 ;
        for (var i=0;i<a.length;i++) {
          sum += a[i];
        }
        return sum;
      }
      console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10,sum([1,2,3,4])));
      console.log("Expected output of sum([1,2,3,4]) is 9  " + myFunctionTest(4,sum([1,2,3,4])));

//function multiply():       
      function multiply(a) {
        var mul = 1;
        for (var i in a) {
          mul *= a[i];
        }
        return mul;
      }
      console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24,multiply([1,2,3,4])));
      console.log("Expected output of multiply([1,2,3,4]) is 9  " + myFunctionTest(4,multiply([1,2,3,4])));
 //function reverse():       
      function reverse(str) {
        var newstr = "";
        for (var i = str.length - 1; i >= 0; i--) {
          newstr += str[i];
        }
        return newstr;
      }
      console.log("Expected output of reverse(hello) is olleh  " + myFunctionTest("olleh",reverse("hello")));
      console.log("Expected output of reverse(hello) is olleh   " + myFunctionTest("hello",reverse("hello")));
 
//function findLongestWord():
      function findLongestWord(a) {
        var long = a[0].length;
        for (var i = 1; i < a.length; i++) {
          if (a[i].length > long) {
            long = a[i].length;
          }
        }
        return long + 1;
      }
      console.log("Expected output of findLongestWord([hello,hi,now]) is 5  " + myFunctionTest(6,findLongestWord(["hello","hi","now"])));
      console.log("Expected output of findLongestWord([hello,hi,now]) is 5  " + myFunctionTest(4,findLongestWord(["hello","hi","now"])));
 
//function filterLongWords():     
      function filterLongWords(a, j) {
        var tab = [];
        for (var i = 0; i < a.length; i++) {
          if (a[i].length > j) {
            tab += " " + a[i];
          }
        }
        return tab;
      }
      console.log("Expected output of filterLongWords([hello,hi,now]) is hello  " + myFunctionTest(" hello",filterLongWords(["hello","hi","now"],4)));
     
     
 
      
      const a = [1, 3, 5, 3, 3];
      const b = a.map(function (elem, i, array) {
        return elem * 10;
      });
      document.writeln(b.toString() + "<br/>");
      const c = a.filter(function (elem, i, array) {
        return elem == 3;
      });
      document.writeln(c.toString() + "<br/>");
      const d = a.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
      });
      document.writeln(d + "<br/>");

