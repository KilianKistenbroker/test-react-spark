import static spark.Spark.*;
import com.google.gson.Gson;

public class Spark {

    // This will be used to query info from currently logged-in user.
    static public String saved_username;

    public static void main(String[] args) {

        port(8080);
        Gson gson = new Gson();


        post("/test", (req, res) -> {
            System.out.println("test was successful");
            return null;
        });
    }
}
