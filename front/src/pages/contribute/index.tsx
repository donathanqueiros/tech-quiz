import { Alternative, Question, Road, Topic } from "@/data/road";
import { Table, Form, Input, Checkbox, Button, Select } from "antd";
import { useEffect, useState } from "react";
import { getRoads } from "services/roadService";
import styled from "styled-components";

export default () => {
  const [roads, setRoads] = useState<Road[]>([]);
  const [selectedRoad, setSelectedRoad] = useState<Road>();
  const [selectedTopic, setSelectedTopic] = useState<Topic>();
  const [selectedQuestion, setSelectedQuestion] = useState<Question>();
  const [selectedAlternative, setSelectedAlternative] = useState<Alternative>();

  const [form] = Form.useForm();

  useEffect(() => {
    const getData = async () => {
      const data = await getRoads();
      setRoads(data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (selectedTopic) {
      const index = selectedRoad?.topics.findIndex(
        (topic) => topic.id === selectedTopic?.id
      );
      debugger;

      if (index !== undefined && index >= 0 && selectedRoad?.topics) {
        const copy = { ...selectedRoad };

        copy.topics[index] = { ...selectedTopic };

        setSelectedRoad({ ...selectedRoad, ...copy });
      } else {
        const copy = { ...selectedRoad } as Road;

        copy.topics && copy.topics.push({ ...selectedTopic });

        setSelectedRoad({ ...selectedRoad, ...copy });
      }
    } else {
      form.resetFields();
    }
  }, [selectedTopic]);

  useEffect(() => {
    if (selectedQuestion) {
      const index = selectedTopic?.questions.findIndex(
        (question) => question.id === selectedQuestion?.id
      );

      if (index !== undefined && index >= 0 && selectedTopic?.questions) {
        const copy = { ...selectedTopic };

        copy.questions[index] = { ...selectedQuestion };

        setSelectedTopic({ ...selectedTopic, ...copy });
      } else {
        const copy = { ...selectedTopic } as Topic;

        copy.questions && copy.questions.push({ ...selectedQuestion });

        setSelectedTopic({ ...selectedTopic, ...copy });
      }
    } else {
      form.resetFields();
    }
  }, [selectedQuestion]);

  useEffect(() => {
    if (selectedAlternative) {
      const index = selectedQuestion?.alternatives.findIndex(
        (alternative) => alternative.id === selectedAlternative?.id
      );

      debugger;

      if (index !== undefined && index >= 0 && selectedQuestion?.alternatives) {
        const copy = { ...selectedQuestion };

        copy.alternatives[index] = { ...selectedAlternative };

        setSelectedQuestion({ ...selectedQuestion, ...copy });
      } else {
        const copy = { ...selectedQuestion } as Question;

        copy.alternatives && copy.alternatives.push({ ...selectedAlternative });

        setSelectedQuestion({ ...selectedQuestion, ...copy });
      }
    } else {
      form.resetFields();
    }
  }, [selectedAlternative]);

  useEffect(() => {
    if (selectedRoad) {
      form.setFieldsValue({ ...selectedRoad });
    }

    if (selectedTopic) {
      form.setFieldsValue({ ...selectedTopic });
    }

    if (selectedQuestion) {
      form.setFieldsValue({ ...selectedQuestion });
    }
    if (selectedAlternative) {
      form.setFieldsValue({ ...selectedAlternative });
    }
  }, [selectedRoad, selectedTopic, selectedQuestion, selectedAlternative]);

  return (
    <Content>
      {!selectedRoad ? (
        <>
          <h1>Roads</h1>
          <Button
            type="primary"
            onClick={() => {
              setSelectedRoad({
                id: roads.length + 1,
                name: "",
                color: "",
                description: "",
                topics: [],
              } as Road);
            }}
          >
            Add Road
          </Button>
          <Table
            columns={roadColumns}
            dataSource={roads}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  form.setFieldsValue(record);
                  setSelectedRoad(record);
                },
              };
            }}
          />
        </>
      ) : (
        <div style={{ display: "flex" }}>
          {!selectedTopic ? (
            <>
              <Form
                form={form}
                style={{ width: "70%", paddingRight: "20px" }}
                name="basic"
                layout="vertical"
                onValuesChange={(changedValues, allValues) => {
                  setSelectedRoad((prev) => ({ ...prev, ...allValues }));
                }}
              >
                <h1>Road Edit</h1>
                <Form.Item
                  label="id"
                  name="id"
                  initialValue={selectedRoad.id}
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input disabled />
                </Form.Item>
                <Form.Item
                  label="name"
                  name="name"
                  initialValue={selectedRoad.name}
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="description"
                  name="description"
                  initialValue={selectedRoad.description}
                >
                  <Input.TextArea />
                </Form.Item>

                <Form.Item
                  label="color"
                  name="color"
                  initialValue={selectedRoad.color}
                >
                  <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    onClick={() => {
                      form.resetFields();
                      setSelectedRoad(undefined);
                    }}
                  >
                    Back
                  </Button>

                  <Button
                    onClick={() => {
                      setSelectedTopic({
                        id: selectedRoad.topics.length + 1,
                        name: "",
                        description: "",
                        questions: [],
                      } as Topic);
                    }}
                  >
                    add topic
                  </Button>
                </Form.Item>

                <Table
                  style={{ marginTop: "100px" }}
                  columns={topicColumns}
                  dataSource={selectedRoad.topics}
                  onRow={(record, rowIndex) => {
                    return {
                      onClick: (event) => {
                        form.setFieldsValue(record);
                        setSelectedTopic(record);
                      },
                    };
                  }}
                />
              </Form>
            </>
          ) : !selectedQuestion ? (
            <Form
              style={{ width: "70%", paddingRight: "20px" }}
              name="basic"
              layout="vertical"
              onValuesChange={(changedValues, allValues) => {
                setSelectedTopic((prev) => ({ ...prev, ...allValues }));
              }}
            >
              <h1>Topic Edit</h1>
              <Form.Item
                label="id"
                name="id"
                initialValue={selectedTopic.id}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                label="name"
                name="name"
                initialValue={selectedTopic.name}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="description"
                name="description"
                initialValue={selectedTopic.description}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button onClick={() => setSelectedTopic(undefined)}>
                  Back
                </Button>

                <Button
                  onClick={() =>
                    setSelectedQuestion({
                      id: selectedTopic.questions.length + 1,
                      name: "",
                      answerId: 0,
                      level: 1,
                      alternatives: [],
                    } as Question)
                  }
                >
                  add Question
                </Button>
              </Form.Item>

              <Table
                style={{ marginTop: "100px" }}
                columns={QuestionColumns}
                dataSource={selectedTopic.questions}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: (event) => {
                      setSelectedQuestion(record);
                    },
                  };
                }}
              />
            </Form>
          ) : !selectedAlternative ? (
            <Form
              style={{ width: "70%", paddingRight: "20px" }}
              name="teste"
              layout="vertical"
              onValuesChange={(changedValues, allValues) => {
                setSelectedQuestion((prev) => ({ ...prev, ...allValues }));
              }}
            >
              <h1>Question Edit</h1>
              <Form.Item
                label="id"
                name="id"
                initialValue={selectedQuestion.id}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                label="name question"
                name="name"
                initialValue={selectedQuestion.name}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="answerId"
                name="answerId"
                initialValue={selectedQuestion.answerId}
              >
                <Select>
                  {selectedQuestion.alternatives.map((alternative) => (
                    <Select.Option value={alternative.id} key={alternative.id}>
                      {alternative.content}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="level"
                name="level"
                initialValue={selectedQuestion.level}
              >
                <Select>
                  <Select.Option value={1}>easy</Select.Option>
                  <Select.Option value={2}>medium</Select.Option>
                  <Select.Option value={3}>hard</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button onClick={() => setSelectedQuestion(undefined)}>
                  Back
                </Button>

                <Button
                  onClick={() => {
                    form.setFieldsValue({
                      id: selectedQuestion.alternatives.length + 1,
                      content: "",
                    });
                    form.resetFields();
                    setSelectedAlternative({
                      id: selectedQuestion.alternatives.length + 1,
                      content: "",
                    });
                  }}
                >
                  add Alternatives
                </Button>
              </Form.Item>

              <Table
                style={{ marginTop: "100px" }}
                columns={alternativesColumns}
                dataSource={selectedQuestion.alternatives}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: (event) => {
                      console.log(record);
                      setSelectedAlternative(record);
                    },
                  };
                }}
              />
            </Form>
          ) : (
            <Form
              style={{ width: "70%", paddingRight: "20px" }}
              layout="vertical"
              onValuesChange={(changedValues, allValues) => {
                setSelectedAlternative((prev) => ({ ...prev, ...allValues }));
              }}
            >
              <h1>Alternative Edit</h1>
              <Form.Item
                label="id"
                name="id"
                initialValue={selectedAlternative.id}
              >
                <Input value={selectedAlternative.id} disabled />
              </Form.Item>
              <Form.Item
                label="content"
                name="content"
                initialValue={selectedAlternative.content}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button onClick={() => setSelectedAlternative(undefined)}>
                  Back
                </Button>
              </Form.Item>
            </Form>
          )}

          <pre style={{ background: "#ebeaea", width: "30%" }}>
            <code>{JSON.stringify(selectedRoad, null, 2)}</code>
          </pre>
        </div>
      )}
    </Content>
  );
};

const roadColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Color ",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
];

const topicColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Color ",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
];

const QuestionColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "answerId ",
    dataIndex: "answerId",
    key: "color",
  },
  {
    title: "level",
    dataIndex: "level",
    key: "level",
  },
];

const alternativesColumns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "content ",
    dataIndex: "content",
    key: "content",
  },
];

const Content = styled.div`
  padding: 0px 200px 0px 200px;
  background: white;
`;
