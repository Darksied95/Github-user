import React from "react";

const Search = () => {
    return(
        <div>
            <input class="ml-10 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-25 w-50-m w-50-l br2-ns br--left-ns" placeholder="Your Email Address" type="text" name="email-address" value="" id="email-address" />
        <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Subscribe" />
        </div>
    )
}


export default Search


