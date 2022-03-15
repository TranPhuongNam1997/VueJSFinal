const parseJwt = (token) => {
    try {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
  
        return JSON.parse(jsonPayload);
    } catch(error) {
        return null;
    }
}

const replaceAll =  (string, search, replace) => {
    return string.split(search).join(replace);
}

const checkImageURL = (imageURL) => {
    if(!imageURL.match(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/i)) {
        return false;
    }
    return true;
};

const checkImageFile = (file) => {
    let filename = file.name;
    let type = file.type;

    if(filename.lastIndexOf(".") == -1) {
        return false
    }

    if( type.lastIndexOf('png') != -1 || type.lastIndexOf('jpeg') != -1 || 
        type.lastIndexOf('jpg') != -1 || type.lastIndexOf('gif') != -1 ) {
        return true
    }

    return false;

}

export {
    parseJwt,
    replaceAll,
    checkImageURL,
    checkImageFile
} 