import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstrumentService } from "./instrument.service";
import { InstrumentControllerBase } from "./base/instrument.controller.base";

@swagger.ApiTags("instruments")
@common.Controller("instruments")
export class InstrumentController extends InstrumentControllerBase {
  constructor(protected readonly service: InstrumentService) {
    super(service);
  }
}
