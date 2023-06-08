import { UUID } from "crypto";

export interface RequirementDto {
  requirement_id: UUID;
  requirement_date: Date;
  site_id: UUID
  item_id: UUID,
  requirement_quantity: number,
  requirement_delivery_date: Date
}