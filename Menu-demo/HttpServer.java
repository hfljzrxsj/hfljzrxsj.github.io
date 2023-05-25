import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class HttpServer {
	public static void main(String[] args) throws IOException {
		ServerSocket serverSocket = new ServerSocket(1392);
		Runtime.getRuntime().exec("cmd /c start http://127.0.0.1:1392");
		Runtime.getRuntime().exec("cmd /c set/p=\"http://127.0.0.1:1392\"<nul | clip");
		System.out.println("please open url:");
		System.out.println("http://127.0.0.1:1392");
		while (true) {
			Socket socket = serverSocket.accept();
			BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			String request = reader.readLine();
			String[] segments = request.split(" ");
			String path = segments[1];
			if ("/".equals(path)) {
				path = "/index.html";
			}
			path = "." + path;
			File file = new File(path);
			if (file.exists()) {
				PrintWriter writer = new PrintWriter(new OutputStreamWriter(socket.getOutputStream(), "UTF-8"));
				writer.println("HTTP/1.1 200 OK");
				writer.println("Content-Type: text/html; charset=utf-8");
				writer.println("Content-Length: " + file.length());
				writer.println();
				FileInputStream fis = new FileInputStream(file);
				byte[] buffer = new byte[1024];
				int len;
				while ((len = fis.read(buffer)) != -1) {
					String content = new String(buffer, 0, len, "UTF-8");
					writer.print(content);
				}
				fis.close();
				writer.close();
				socket.close();
			} else {
				PrintWriter writer = new PrintWriter(new OutputStreamWriter(socket.getOutputStream(), "UTF-8"));
				writer.println("HTTP/1.1 404 Not Found");
				writer.println("Content-Type: text/html; charset=utf-8");
				writer.println();
				writer.println("<h1>404 Not Found</h1>");
				writer.close();
				socket.close();
			}

		}
	}
}