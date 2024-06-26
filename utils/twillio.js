const account_sid=process.env.TWILIO_SID
const accnt_pwd=process.env.TWILIO_AUTH_TOKEN
if (!account_sid|| !accnt_pwd) {
    throw new Error("Twilio credentials are missing. Please set TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN environment variables.");
}
const client=require("twilio")(account_sid,accnt_pwd)

module.exports={ 

    sendSms:async(phoneNumber,otp,name)=>{
        // console.log(phoneNumber,otp,name);
        const info=await client.messages
        .create({
           
            body:`Hai ${name },your Laundry account verification code is ${otp}`,
            from:'+16506141500',
            
            to:`${phoneNumber}`
        })
        if(info.status.includes("queued"))
        return true 
    else
        return false 
    }
}
