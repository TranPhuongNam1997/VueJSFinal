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

const checkFormatImage = (img) => {
    var isValid = /\.jpe?g$/i.test(img);
    if (!isValid) {
        alert('không đúng định đạng hình ảnh')
    }

    return isValid;
  };

export {
    parseJwt,
    replaceAll,
    checkFormatImage
} 