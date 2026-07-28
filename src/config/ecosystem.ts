/**
 * Cross-references between Experience Sectors and the brands in the ecosystem.
 *
 * The relationship is NOT hand-assigned here. It is read from each sector's
 * approved `capabilities` list, which already names the brands that belong to
 * it — Media Experience lists The Georgia B. Media Group, Training Experience
 * lists The 5LA Academy, and so on. Deriving it keeps this file from becoming
 * a second, drifting source of truth.
 */

import { sectors, type Sector } from "./sectors";
import { companies, type Company } from "./companies";

/** True when a sector's capabilities name this brand. */
function sectorNames(sector: Sector, company: Company) {
  return (sector.capabilities ?? []).some((capability) =>
    capability.startsWith(company.name)
  );
}

/** The Experience Sector a brand sits within, if the approved copy says so. */
export function sectorForCompany(company: Company): Sector | undefined {
  return sectors.find((sector) => sectorNames(sector, company));
}

/** The brands a sector's approved capabilities name. */
export function companiesInSector(sector: Sector): Company[] {
  return companies.filter((company) => sectorNames(sector, company));
}

/** Other brands sharing a sector, for onward navigation. */
export function relatedCompanies(company: Company): Company[] {
  const sector = sectorForCompany(company);
  if (!sector) return companies.filter((c) => c.slug !== company.slug).slice(0, 3);
  return companiesInSector(sector).filter((c) => c.slug !== company.slug);
}

/** The other three sectors, for onward navigation. */
export function otherSectors(sector: Sector): Sector[] {
  return sectors.filter((s) => s.slug !== sector.slug);
}
