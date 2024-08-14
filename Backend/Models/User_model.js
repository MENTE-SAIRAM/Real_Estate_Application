import mongoose from 'mongoose';
import { type } from 'os';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
       type:String,
       default:'https://in.images.search.yahoo.com/images/view;_ylt=AwrPplRDAoxmOpUKAaG9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzZhZDU4YTZiNTJkZDUxYzJmOWVlYTgyMzU0Y2I0MTZjBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Duserimage%26type%3DE210IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=820&h=942&imgurl=www.seekpng.com%2Fpng%2Fdetail%2F115-1150053_avatar-png-transparent-png-royalty-free-default-user.png&rurl=https%3A%2F%2Fwww.seekpng.com%2Fipng%2Fu2q8u2w7e6y3a9a9_avatar-png-transparent-png-royalty-free-default-user%2F&size=54.7KB&p=userimage&oid=6ad58a6b52dd51c2f9eea82354cb416c&fr2=piv-web&fr=mcafee&tt=Avatar+Png+Transparent+Png+Royalty+Free+-+Default+User+Image+Jpg+PNG+...&b=0&ni=21&no=3&ts=&tab=organic&sigr=OfoH1UbBtjNa&sigb=B8XCeP3ulWnR&sigi=OtRCM_js92xg&sigt=_n.HYLx8J3p.&.crumb=cImKtm7.ASs&fr=mcafee&fr2=piv-web&type=E210IN826G0'
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
