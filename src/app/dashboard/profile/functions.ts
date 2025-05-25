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
    (current: TEducation[] = []) => [
      ...current,
      {
        degree: arg.degree,
        school: arg.school,
        location: arg.location,
        url: arg.url,
        description: arg.description,
        media_url: arg.url,
        from_date: arg.from_date,
        to_date: arg.to_date,
        id: `${Date.now()}`,
        created_at: `${Date.now()}`,
      },
    ],
    true
  );
  return response.data;
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
    (current: TVolunteering[] = []) => [
      ...current,
      {
        role: arg.role,
        organization: arg.organization,
        organization_url: arg.organization_url,
        location: arg.location,
        start_date: arg.start_date,
        end_date: arg.end_date,
        currently_volunteering: false,
        description: arg.description,
        id: `${Date.now()}`,
        created_at: `${Date.now()}`,
      },
    ],
    true
  );
  return response.data;
}

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
    (current: TWorkExperience[] = []) => [
      ...current,
      {
        title: arg.title,
        company: arg.company,
        company_url: arg.url,
        location: arg.location,
        employment_type: "contract",
        start_date: arg.from,
        end_date: arg.to,
        currently_working: false,
        description: arg.description,
        achievements: "",
        id: `${Date.now()}`,
        created_at: `${Date.now()}`,
      },
    ],
    true
  );
  return response.data;
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
    // platform_name: arg.type == "custom" ? arg.platform_name : arg.type,
    platform_name: arg.type,
    username: arg.username,
    url: arg.url,
  });
  mutate(
    "/contacts/",
    (current: TContact[] = []) => [
      ...current,
      {
        type: arg.type,
        // platform_name: arg.type == "custom" ? arg.platform_name : arg.type,
        platform_name: arg.type,
        username: arg.username,
        url: arg.url,
        id: `${Date.now()}`,
        created_at: `${Date.now()}`,
      },
    ],
    true
  );
  return response.data;
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
    // linkedin_profile: http://nlVUmwSdhuHAaeeuQxkmVQ.nsgvQ5aYKp1C.lk+6LlHUaLVZTZthUw4LaQ-Z+p,
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
  return response.data;
};
