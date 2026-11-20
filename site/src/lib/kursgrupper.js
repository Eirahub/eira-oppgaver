// Groups the front-page courses by technology (src/data/kursgrupper.yml). No file access, so node --test can run it.

// groups: [{ title, courses?: [folder names] }]. Courses keep the order in the list.
// A group without `courses` gets every course not listed elsewhere (in the order given);
// without such a group they end up in "Andre" at the bottom. Empty groups are left out.
export function groupCourses(courses, groups) {
  const byName = new Map(courses.map((c) => [c.course, c]));
  const listed = new Set(groups.flatMap((g) => g.courses || []));
  const rest = courses.filter((c) => !listed.has(c.course));
  const all = groups.some((g) => !g.courses) ? groups : [...groups, { title: 'Andre' }];
  return all
    .map((g) => ({ title: g.title, courses: g.courses ? g.courses.map((n) => byName.get(n)).filter(Boolean) : rest }))
    .filter((g) => g.courses.length);
}
