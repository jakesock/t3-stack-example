import { Card } from "@/components/Card";
import { CardContent } from "@/components/CardContent";
import { CardForm } from "@/components/CardForm";
import { CardHeader } from "@/components/CardHeader";
import { List } from "@/components/List";
import { ListItem } from "@/components/ListItem";
import { api } from "@/utils/api";
import { type GroceryList } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import { useCallback, useState } from "react";

const HomePage: NextPage = () => {
  const [itemName, setItemName] = useState<string>("");

  const { data: list, refetch } = api.groceryList.findAll.useQuery();
  const insertOneMutation = api.groceryList.insertOne.useMutation({ onSuccess: () => refetch() });
  const updateOneMutation = api.groceryList.updateOne.useMutation({ onSuccess: () => refetch() });
  const deleteAllMutation = api.groceryList.deleteAll.useMutation({ onSuccess: () => refetch() });

  const insertOne = useCallback(() => {
    if (itemName === "") return;

    insertOneMutation.mutate({
      title: itemName,
    });

    setItemName("");
  }, [itemName, insertOneMutation]);

  const updateOne = useCallback(
    (item: GroceryList) => {
      updateOneMutation.mutate({
        ...item,
        checked: !item.checked,
      });
    },
    [updateOneMutation]
  );

  const clearAll = useCallback(() => {
    if (list?.length) {
      deleteAllMutation.mutate({
        ids: list.map((item) => item.id),
      });
    }
  }, [list, deleteAllMutation]);

  return (
    <>
      <Head>
        <title>Grocery List</title>
        <meta name="description" content="Example app using the T3 stack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Card>
          <CardContent>
            <CardHeader title="Grocery List" listLength={list?.length ?? 0} clearAllFn={clearAll} />
            <List>
              {list?.map((item) => (
                <ListItem key={item.id} item={item} onUpdate={updateOne} />
              ))}
            </List>
          </CardContent>
          <CardForm
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            submit={insertOne}
          />
        </Card>
      </main>
    </>
  );
};

export default HomePage;
