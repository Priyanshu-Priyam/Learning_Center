#!/usr/bin/env python3
"""
Simple HTTP server for Learning Center website and booklet
Serves from the root directory so both /website and /booklet are accessible
"""

import http.server
import socketserver
import os

PORT = 8000

# Change to the directory where this script is located
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers if needed
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()
    
    def log_message(self, format, *args):
        # Custom log format
        print(f"[{self.address_string()}] {args[0]}")

Handler = MyHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"""
╔══════════════════════════════════════════════════════════╗
║   Special Kids Learning Center - Local Server           ║
╚══════════════════════════════════════════════════════════╝

🌐 Server running at:
   • Website:  http://localhost:{PORT}/website/
   • Booklet:  http://localhost:{PORT}/booklet/

📝 Press Ctrl+C to stop the server
""")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n👋 Server stopped. Goodbye!")

