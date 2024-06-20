import * as graphql from "@nestjs/graphql";
import { InstrumentResolverBase } from "./base/instrument.resolver.base";
import { Instrument } from "./base/Instrument";
import { InstrumentService } from "./instrument.service";

@graphql.Resolver(() => Instrument)
export class InstrumentResolver extends InstrumentResolverBase {
  constructor(protected readonly service: InstrumentService) {
    super(service);
  }
}
