import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearch } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/constants"
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const isGPTSearchVisible = useSelector((store) => store.gpt.isSearchVisible);
    const handleToggleSearch = () => {
        dispatch(toggleSearch());
    };

    const handleSignout = () => {
        signOut(auth).then(() => {
            // navigate("/");
        }).catch((error) => {
            navigate("/");

        });
    }

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        dispatch(changeLanguage(selectedLanguage));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, set user in Redux store
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse");
            } else {
                // User is signed out, clear user from Redux store
                dispatch(removeUser());
                navigate("/");
            }
        })
        return () => unsubscribe();
    }, [])

    return (
        <div className="absolute z-10 px-8 py-4 bg-gradient-to-b from-black w-screen flex justify-between items-center">
            <img
                className="w-44"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d815-7fa2-9a24-04c29c284148/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {user && <div>

                {isGPTSearchVisible && <select className="m-2 p-2 " onChange={(e) => {
                    handleLanguageChange(e)
                }}>
                    {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.identifier} value={lang.identifier}>
                            {lang.name}
                        </option>
                    ))}
                </select>
                }
                <button className="p-2 bg-white m-4 rounded-lg" onClick={handleToggleSearch}>{!isGPTSearchVisible ? "GPT Search" : "Home"}</button>
                <button
                    className="text-white border-2 p-2 rounded-lg cursor-pointer"
                    onClick={handleSignout}
                >
                    Sign Out
                </button>
            </div>}
        </div >
    );
};
export default Header;
