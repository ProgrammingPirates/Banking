The simplest solution (without depending on any third-party library or platform) is to create a URL instance pointing to the web page / link you want to download, and read the content using streams.

For example:

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;


$("#myHref").on('click', function() {
    document.getElementById("Enter").style.flexGrow = "5";
     window.location = "file:///C:/Users/Akhila/Desktop/Hack-a-thorn/Pin.html";

});