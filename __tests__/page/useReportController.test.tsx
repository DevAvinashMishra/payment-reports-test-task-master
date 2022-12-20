import moment from "moment";
import reverse from "lodash/reverse";
import useAsyncFn from "../../src/hooks/useAsync";
import { totalsGenerator } from "../../src/util/helper";
import { fetchDetailedData, fetchProj, fetchGate } from "../../src/util/apis";