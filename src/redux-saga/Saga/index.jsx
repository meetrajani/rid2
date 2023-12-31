import { all } from "redux-saga/effects"
import { deleterootProducetsaga, postrootProducetsaga, rootProducetsaga, updaterootProducetsaga } from "./root/rootProducet"

export function* rootProducet () {
    yield all ([rootProducetsaga(),postrootProducetsaga(),deleterootProducetsaga(),updaterootProducetsaga()])
}