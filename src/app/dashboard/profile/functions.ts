import httprequest from "@/utils/httpRequest";
import {
  TCertification,
  TCertificationSchema,
  TContact,
  TContactSchema,
  TEducation,
  TEducationSchema,
  TProfileSchema,
  TSkill,
  TSkillsSchema,
  TVolunteering,
  TVolunteerSchema,
  TWorkExperience,
  TWorkExperienceSchema,
} from "./type";
import { mutate } from "swr";
import { TPost, TUser } from "@/app/type";

export async function getskills() {
  return httprequest
    .get("/skill/")
    .then((res) => res.data as TSkill[])
    .catch(() => []);
}

export const addskills = async (
  url: string,
  { arg }: { arg: TSkillsSchema }
) => {
  const response = await httprequest.post("skill/", {
    names: [arg.skill],
  });
  mutate(
    "/skill/",
    (current: TSkill[] = []) => [...current, ...response.data],
    true
  );
  return response.data;
};

export async function deleteskills(
  url: string,
  { arg }: { arg: { id: number } }
) {
  httprequest.delete(`/skill/${arg.id}`);
  mutate(
    "/skill/",
    (current: TSkill[] = []) => current.filter((el) => el.id != arg.id),
    true
  );
}

export const getCertifications = () => {
  return httprequest
    .get("/certification/me")
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
    "/certification/me",
    (current: TCertification[] = []) => [...current, response.data],
    true
  );
  return response.data;
};

export async function deleteCertification(
  url: string,
  { arg }: { arg: { id: string } }
) {
  await httprequest.delete(`/certification/${arg.id}`);
  mutate(
    "/certification/me",
    (current: TCertification[] = []) =>
      current.filter((el) => el.id !== arg.id),
    true
  );
}

export const getEducations = () => {
  return httprequest
    .get("/education/me")
    .then((res) => res.data as TEducation[])
    .catch(() => []);
};

export async function addEducation(
  url: string,
  { arg }: { arg: TEducationSchema }
) {
  const response = await httprequest.post("/education/", {
    degree: arg.degree,
    school: arg.school,
    location: arg.location,
    url: arg.url,
    description: arg.description,
    media_url: arg.url,
    from_date: arg.from_date,
    to_date: arg.to_date,
  });
  mutate(
    "/education/me",
    (current: TEducation[] = []) => [...current, response.data],
    true
  );
  return response.data;
}

export async function deleteEducation(
  url: string,
  { arg }: { arg: { id: string } }
) {
  await httprequest.delete(`/education/${arg.id}`);
  mutate(
    "/education/me",
    (current: TEducation[] = []) => current.filter((el) => el.id !== arg.id),
    true
  );
}

export const getVolunteers = () => {
  return httprequest
    .get("/volunteering/")
    .then((res) => res.data as TVolunteering[])
    .catch(() => []);
};

export async function addvolunteer(
  url: string,
  { arg }: { arg: TVolunteerSchema }
) {
  const response = await httprequest.post("/volunteering/", {
    role: arg.role,
    organization: arg.organization,
    organization_url: arg.organization_url,
    location: arg.location,
    start_date: arg.start_date,
    end_date: arg.end_date,
    // currently_volunteering: arg.currently_volunteering,
    description: arg.description,
  });
  mutate(
    "/volunteering/",
    (current: TVolunteering[] = []) => [...current, response.data],
    true
  );
  return response.data;
}

export const deleteVolunteering = async (
  url: string,
  { arg }: { arg: { id: string } }
) => {
  await httprequest.delete(`/volunteering/${arg.id}`);
  mutate(
    "/volunteering/",
    (current: TVolunteering[] = []) => current.filter((el) => el.id !== arg.id),
    true
  );
};

export const getWorkExperience = () => {
  return httprequest
    .get("/work-experiences/")
    .then((res) => res.data.data as TWorkExperience[])
    .catch(() => []);
};

export const addexperience = async (
  url: string,
  { arg }: { arg: TWorkExperienceSchema }
) => {
  const response = await httprequest.post("/work-experiences/", {
    title: arg.title,
    company: arg.company,
    company_url: arg.url,
    location: arg.location,
    employment_type: "contract",
    start_date: arg.from,
    end_date: arg.to,
    // currently_working: false,
    description: arg.description,
    // achievements: string
  });
  mutate(
    "/work-experiences/",
    (current: TWorkExperience[] = []) => [...current, response.data],
    true
  );
  return response.data;
};

export const deleteWorkExperience = async (
  url: string,
  { arg }: { arg: { id: string } }
) => {
  await httprequest.delete(`/work-experiences/${arg.id}`);
  mutate(
    "/work-experiences/",
    (current: TWorkExperience[] = []) =>
      current.filter((el) => el.id !== arg.id),
    true
  );
};

export const getContacts = () => {
  return httprequest
    .get("/contacts/")
    .then((res) => res.data as TContact[])
    .catch(() => []);
};

export async function addcontact(
  url: string,
  { arg }: { arg: TContactSchema }
) {
  const response = await httprequest.post(url, {
    type: arg.type,
    platform_name: arg.type == "custom" ? arg.platform_name : arg.type,
    username: arg.username,
    url: arg.url,
  });
  mutate(
    "/contacts/",
    (current: TContact[] = []) => [...current, response.data],
    true
  );
  return response.data;
}

export async function deletecontact(
  url: string,
  { arg }: { arg: { id: string } }
) {
  await httprequest.delete(url);
  mutate(
    "/contacts/",
    (current: TContact[] = []) => current.filter((el) => el.id !== arg.id),
    true
  );
}

export const updateProfile = async (
  url: string,
  { arg }: { arg: TProfileSchema }
) => {
  const formdata = {
    full_name: arg.full_name,
    // email: p2DL-x@RwjfioUbKpzfUDnrPoVCI.wuu,
    // phone: 08168890192,
    // company: arg.,
    job_title: arg.job_title,
    bio: arg.bio,
    industry: arg.industry,
    years_of_experience: arg.experience,
    location: arg.location,
    // education: arg.ed,
    // age: -59018639,
    sex: arg.pronouns,
    // status: velit mollit cillum,
    // certifications: esse aliqua dolor tempor,
    linkedin_profile: arg.linkedin,
    visibility: arg.visibility,
    recruiter_tag: arg.recruiter_tag == "yes",
    // is_admin: false,
    // topics: [
    //   proident sed nostrud mollit,
    //   do laboris eu
    // ],
    // is_active: false
  };
  const response = await httprequest.put(url, formdata);
  mutate("/profiles/me");
  return response.data as TUser;
};

export const updateProfilePicture = async (
  url: string,
  { arg }: { arg: { file: File } }
) => {
  const formData = new FormData();
  formData.append("file", arg.file);
  const response = await httprequest.post(url, formData);
  return response.data as TUser;
};

export const fetchUsersPosts = (url: string) => {
  return httprequest
    .get(url)
    .then((res) => res.data as TPost[])
    .catch(() => []);
};
