-- create the courses table
-- ran into issues with uuid so using gen_random_uuid() from pgcrypto
create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0 check (progress >= 0 and progress <= 100),
  icon_name text not null default 'BookOpen',
  created_at timestamp with time zone default now()
);

-- enable RLS (needed this otherwise courses weren't showing up)
alter table courses enable row level security;

-- allow anyone to read courses for this prototype
-- TODO: tighten this up if auth gets added later
create policy "Allow public read" on courses
  for select using (true);

-- seed data
insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Code2'),
  ('TypeScript Mastery', 45, 'FileType'),
  ('Next.js App Router', 90, 'Zap'),
  ('Supabase & PostgreSQL', 30, 'Database');
