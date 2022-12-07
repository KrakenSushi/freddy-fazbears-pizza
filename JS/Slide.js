var i = 0 ;
var images = [];
var time = 2500;

images[0] = 'image1.png';
images[1] = 'image2.png';
images[2] = 'image3.png';

    function changeImg()
    {
        document.slide.src = images[i];

        if(i<images.length - 1)
        {
            i++;
        }
        else
        {
            i = 0;
        }
        setTimeout("changeImg()", time)
    }
    window.onload = changeImg;