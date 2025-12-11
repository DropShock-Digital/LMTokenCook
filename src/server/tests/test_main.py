from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_stats():
    response = client.get("/stats")
    assert response.status_code == 200
    data = response.json()
    assert "tokens" in data
    assert "chunks" in data
    assert "runs" in data
