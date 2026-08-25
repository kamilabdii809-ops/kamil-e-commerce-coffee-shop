import { Link } from "react-router-dom";
import { AiFillTikTok,AiFillFacebook ,AiFillTwitterCircle} from "react-icons/ai";


function Footer (){
return(
<footer className="bg-coffee-brown text-white p-4">
<div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
<div>
    <h3 className="font-bold text-lg ">☕ <span className="text-coffee-orange"> kamil Abdalhadi </span>Coffee shop</h3>
    <p className="mt-3 text-white/80 ">fresh coffee ,snacks and simple online shop</p>
</div>
<div>
    <h4 className="font-bold">Quick links</h4>
    <ul className="mt-2 space-y-2 text-white/80">
     <li><Link to="/emnu" className="hover:text-white">Menu</Link></li>
     <li><Link to="/cart"  className="hover:text-white">Cart</Link></li>
     <li><Link to="/Home" className="hover:text-white" >Orders</Link></li>
    </ul>
</div>
<div>
    <h4 className="font-stretch-semi-condensed">contact</h4>
    <ul className="mt-2 text-white/80">
        <li>📍Ethiopia Jimma</li>
        <li>📞+251 97662 9129</li>
        <li>📩 info@kamilabdii809@gmail.com</li>
    </ul>
</div>

</div>
 <div className="flex mx-auto p-4 gap-3 ">
    <p>you can also join us through </p>
    <Link to="https://tiktok.com/@kamil.techtips"  className="hover:text-green-400 "><AiFillTikTok size={25}/> Tiktok</Link>
    <Link className="hover:text-green-400"> <AiFillTwitterCircle size={25} />Twitter</Link>
    <Link className="hover:text-green-400 "><AiFillFacebook size={25} /> Facebook</Link>
 </div>
<div className="mt-6 border-t border-white/20 flex-col items-center">
    <p className="text-white/90 text-sm mt-4 text-center">
        &copy; {new Date().getFullYear()} kamil Abdalhadi coffee shop. All right reserved
    </p>
 </div>


</footer>
)
}
export default Footer;