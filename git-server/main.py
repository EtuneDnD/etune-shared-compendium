from fastapi import FastAPI
import uvicorn
import sys
from subprocess import check_output
from fastapi.logger import logger
from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    actorString: str

app = FastAPI(debug=True)

@app.get("/pull")
async def root():
    output = check_output("cd etune-shared-compendium-db && git pull origin main", shell=True).decode(sys.stdout.encoding)
    return {"message": output}

@app.post("/push")
async def create_item(item: Item):
    print(item)
    return item

if __name__ == "__main__":
    log_config = uvicorn.config.LOGGING_CONFIG
    log_config["formatters"]["access"]["fmt"] = "%(asctime)s - %(levelname)s - %(message)s"
    log_config["formatters"]["default"]["fmt"] = "%(asctime)s - %(levelname)s - %(message)s"
    uvicorn.run(app, host="localhost", port=8000, debug=True, log_config=log_config)