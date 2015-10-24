CREATE SCHEMA sqlshare;

---

CREATE TABLE sqlshare.docs(
    guid TEXT PRIMARY KEY,
    doc JSON,
    created TIMESTAMPTZ DEFAULT now()
);

---

CREATE SEQUENCE sqlshare.guid_seq
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 999999999999999999
    START 60
    CACHE 20;

---

CREATE OR REPLACE FUNCTION sqlshare.create_doc(
    IN i_doc JSON,
    OUT o_guid TEXT
) RETURNS TEXT AS
$$
BEGIN

    INSERT INTO sqlshare.docs (guid, doc) VALUES (
        md5(clock_timestamp()::text||random()::text||nextval('sqlshare.guid_seq')),
        i_doc
    )
    RETURNING guid INTO o_guid;

END;
$$
LANGUAGE plpgsql SECURITY DEFINER;
DROP FUNCTION IF EXISTS sqlshare.get_doc(TEXT);

---

CREATE OR REPLACE FUNCTION sqlshare.get_doc(
    IN i_guid TEXT,
    OUT o_guid TEXT,
    OUT o_doc JSON,
    OUT o_created TIMESTAMPTZ
) RETURNS record AS
$$
BEGIN

    SELECT guid, doc, created FROM sqlshare.docs
    WHERE guid = i_guid
    INTO o_guid, o_doc, o_created;

END;
$$
LANGUAGE plpgsql SECURITY DEFINER;

---
