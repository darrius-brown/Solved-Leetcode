public class Codec {

    public String encode(String longUrl) {
        return longUrl;
    }

    public String decode(String shortUrl) {
        return shortUrl;
    }
}


// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));