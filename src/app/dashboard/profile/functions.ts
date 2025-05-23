import httprequest from "@/utils/httpRequest";
import {
  TCertification,
  TCertificationSchema,
  TSkill,
  TSkillsSchema,
} from "./type";
import { mutate } from "swr";

export const addskills = async (
  url: string,
  { arg }: { arg: TSkillsSchema }
) => {
  const response = await httprequest.post("skill/", {
    names: [arg.skill],
  });
  mutate(
    "skill/",
    (current: TSkill[] = []) => [
      ...current,
      { name: arg.skill, id: Date.now() },
    ],
    true
  );
  return response.data;
};

export const getCertifications = () => {
  return httprequest
    .get("certification/me")
    .then((res) => res.data as TCertification[])
    .catch(() => []);
};

export const submitCertification = async (
  url: string,
  { arg }: { arg: TCertificationSchema }
) => {
  const response = await httprequest.post("certification/", {
    name: arg.name,
    organization: arg.organization,
    url: arg.url,
    description: arg.description,
    media_url: arg.url,
    issued_date: arg.issued_date,
    expiration_date: arg.expiration_date,
  });
  mutate(
    "certification/me",
    (current: TCertification[] = []) => [
      ...current,
      {
        name: arg.name,
        organization: arg.organization,
        url: arg.url,
        description: arg.description,
        media_url: arg.url,
        issued_date: arg.issued_date,
        expiration_date: arg.expiration_date,
        id: `${Date.now()}`,
        created_at: `${Date.now()}`,
      },
    ],
    true
  );
  return response.data;
};
