import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Lab 1',
      theme: ThemeData(
        // This is the theme of your application.
        primarySwatch: Colors.teal,
      ),
      home: MyHomePage(title: 'Lab 1'),
      debugShowCheckedModeBanner: false, // hide banner
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Center(
              child: Image(
                image: AssetImage('assets/similarlogo.png'),
                height: 140,
             ),
            ),
            Column(
                children: List<Widget>.generate(2, (int i) {
                  return Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: List<Widget>.generate(2, (int j) {
                        return FlatButton(
                            child: Text('Button'),
                            color: Colors.grey[350],
                            onPressed: () {});
                      })
                  );
                })
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                Flexible( // A widget that controls how a child of a Row, Column, or Flex flexes.
                  flex: 1, // The flex factor to use for this child
                  child: Text(
                    "Email",
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.grey[650],
                    ),
                  ),
                ),
                Flexible(
                  flex: 1,
                  child: TextField(
                    textAlignVertical: TextAlignVertical.bottom,
                    decoration: InputDecoration(
                      enabledBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.pink),
                      ),
                      focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.pink),
                      ),
                      border: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.pink),
                      ),
                    ),
                    style: TextStyle(
                      fontSize: 16,

                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      //), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
