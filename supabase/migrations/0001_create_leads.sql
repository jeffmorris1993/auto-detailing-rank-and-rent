-- Leads table for the form-only MVP.
--
-- Apply this migration to your Supabase project in one of three ways:
--   1) Supabase CLI:        `supabase db push`
--   2) Supabase dashboard:  SQL Editor → paste & run
--   3) Supabase MCP:        `apply_migration` with this file's contents
--
-- The server action uses the service role key (bypasses RLS). RLS is enabled
-- with no policies so anon/client requests cannot read the table.

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id                uuid          primary key default gen_random_uuid(),
  name              text          not null,
  phone             text          not null,
  email             text          not null,
  city              text          not null,
  service_requested text          not null,
  vehicle_type      text          not null,
  vehicle_condition text,
  preferred_timing  text,
  message           text,
  page_url          text,
  referrer          text,
  utm_source        text,
  utm_medium        text,
  utm_campaign      text,
  utm_term          text,
  utm_content       text,
  status            text          not null default 'new',
  created_at        timestamptz   not null default now()
);

comment on table public.leads is
  'Quote requests captured from the public site. PII — service role only.';

-- PII table: no anon access at all. Service role bypasses RLS by design.
alter table public.leads enable row level security;

-- Useful indexes for dashboard / triage queries.
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx     on public.leads (status);
