// primitive data types  
// 7 types :  string , number, boolean, null, undefined
            // symbol, bigint



            const score = 100
            const scorevalue = 100.3

            const isloggedin = false
            const outsidetemp = null
            let useremail;

             const id = symbol('123')
             const anotherid = symbol('123')

            console.log(id === anotherid);
            const bignumber = 3444442553553535n
    

            // array, objects, functions

            //array
            const heros = ["shaktiman", "naagraj","doga"]  //array

                let myobj = {
                name: "kartik", //object
                Age: 22,
            }


            const myfunction = function(){
                console.log("hello world"); //function
            }




            console.log(typeof score);


            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            // stack(primitive),   heap (non-primitve)

            let myyoutubename = "hiteshchaudharydotcom"

            let  anothername = myyoutubename
            anothername = "chaiaurcode"
            console.log(myyoutubename);  
            console.log(anothername);

            

            let userone = {
                email: "user@google.com",
                upi: "user@ybl"
            }

            let usertwo = userone
            usertwo.email = "hitesh@google.com"

            console.log(userone.email);
            console.log(usertwo.email); 
