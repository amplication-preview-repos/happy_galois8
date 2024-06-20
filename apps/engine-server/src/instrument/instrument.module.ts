import { Module } from "@nestjs/common";
import { InstrumentModuleBase } from "./base/instrument.module.base";
import { InstrumentService } from "./instrument.service";
import { InstrumentController } from "./instrument.controller";
import { InstrumentResolver } from "./instrument.resolver";

@Module({
  imports: [InstrumentModuleBase],
  controllers: [InstrumentController],
  providers: [InstrumentService, InstrumentResolver],
  exports: [InstrumentService],
})
export class InstrumentModule {}
