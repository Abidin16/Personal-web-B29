function submitform(){
    let name= document.getElementById("input-name").value
    let email= document.getElementById("input-email").value
    let subject= document.getElementById("input-subject").value
    let message= document.getElementById("input-message").value

        if(name == ''){
             return alert("form name harus diisi guys")
        }

        if(email == ''){
             return alert("form email harus diisi guys")
        }

        if(message == ''){
           return alert("form message harus diisi guys")
        }
   
 
            // if(name == '' || email == '' || phone == '' || message == ''){
            //     return alert("semua form harus di isi guys...")
            // }


            // console.log(name)
            // console.log(email)
            // console.log(phone)
            // console.log(subject)
            // console.log(message)

            


    console.log(`Name: ${name}`)
    console.log(`Email:${email}`)
    console.log(`subject:${subject}`)
    console.log(`Message:${message}`)

    let emailReceiver = 'reryristiyani24@gmail.com'
    
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=halo my name ${name}, ${message}` 
    a.click()
}

    // let dataObject ={
    //     name: name,
    //     email: email,
    //     phoneNumber:phone,
    //     subject:subject,
    //     message:message
    // }

    // console.log(dataObject)

