# Hackerskolen: en hemmelig tjeneste på en ukjent port på din egen maskin.
# Kjør: python3 hemmelig_tjeneste.py   (Ctrl+C stopper)
# Finn porten med din egen portskanner mot 127.0.0.1.
import base64
import random
import socket

port = random.SystemRandom().choice(
    [p for p in range(2000, 10000) if p != 8080])
flagg = base64.b64decode("RUlSQXtwb3J0ZW5fc3RvX3BhX2dsb3R0fQ==").decode()

with socket.socket() as s:
    s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    s.bind(("127.0.0.1", port))
    s.listen()
    print("Den hemmelige tjenesten kjører på en port mellom 2000 og 9999.")
    print("Hvilken? Det må du finne ut. (Ctrl+C stopper)")
    try:
        while True:
            kobling, _ = s.accept()
            with kobling:
                kobling.sendall(
                    f"HEMMELIG TJENESTE 1.0\r\nFlagg: {flagg}\r\n".encode())
    except KeyboardInterrupt:
        print("\nStoppet.")
